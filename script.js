class DrawingApp {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.isDrawing = false;
        this.currentColor = '#000';
        this.currentSize = 5;
        
        this.setupCanvas();
        this.setupEventListeners();
        this.loadDrawing();
        this.updateBrushPreview();
    }

    setupCanvas() {
        // Ajustar el canvas para dispositivos móviles
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        
        // Configurar el contexto
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
    }

    resizeCanvas() {
        const container = this.canvas.parentElement;
        const containerWidth = container.clientWidth - 40;
        
        if (window.innerWidth <= 768) {
            this.canvas.width = containerWidth;
            this.canvas.height = containerWidth * 0.75;
        } else {
            this.canvas.width = Math.min(800, containerWidth);
            this.canvas.height = 600;
        }
        
        this.loadDrawing(); // Recargar el dibujo después de redimensionar
    }

    setupEventListeners() {
        // Eventos de dibujo para mouse
        this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
        this.canvas.addEventListener('mousemove', (e) => this.draw(e));
        this.canvas.addEventListener('mouseup', () => this.stopDrawing());
        this.canvas.addEventListener('mouseout', () => this.stopDrawing());

        // Eventos de dibujo para touch
        this.canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousedown', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            this.canvas.dispatchEvent(mouseEvent);
        });

        this.canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousemove', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            this.canvas.dispatchEvent(mouseEvent);
        });

        this.canvas.addEventListener('touchend', (e) => {
            e.preventDefault();
            const mouseEvent = new MouseEvent('mouseup', {});
            this.canvas.dispatchEvent(mouseEvent);
        });

        // Selector de colores
        document.querySelectorAll('.color-option').forEach(option => {
            option.addEventListener('click', (e) => {
                document.querySelector('.color-option.active').classList.remove('active');
                e.target.classList.add('active');
                this.currentColor = e.target.dataset.color;
                this.updateBrushPreview();
            });
        });

        // Tamaño del pincel
        document.getElementById('brushSize').addEventListener('input', (e) => {
            this.currentSize = e.target.value;
            this.updateBrushPreview();
        });

        // Botones
        document.getElementById('clearBtn').addEventListener('click', () => this.clearCanvas());
        document.getElementById('saveBtn').addEventListener('click', () => this.downloadDrawing());
    }

    getMousePos(e) {
        const rect = this.canvas.getBoundingClientRect();
        return {
            x: (e.clientX - rect.left) * (this.canvas.width / rect.width),
            y: (e.clientY - rect.top) * (this.canvas.height / rect.height)
        };
    }

    startDrawing(e) {
        this.isDrawing = true;
        const pos = this.getMousePos(e);
        this.ctx.beginPath();
        this.ctx.moveTo(pos.x, pos.y);
    }

    draw(e) {
        if (!this.isDrawing) return;

        const pos = this.getMousePos(e);
        
        this.ctx.strokeStyle = this.currentColor;
        this.ctx.lineWidth = this.currentSize;
        this.ctx.lineTo(pos.x, pos.y);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.moveTo(pos.x, pos.y);
    }

    stopDrawing() {
        if (this.isDrawing) {
            this.isDrawing = false;
            this.saveDrawing();
            this.showSavedIndicator();
        }
    }

    updateBrushPreview() {
        const preview = document.getElementById('brushPreview');
        const size = Math.max(4, Math.min(this.currentSize, 30));
        preview.style.width = size + 'px';
        preview.style.height = size + 'px';
        preview.style.backgroundColor = this.currentColor;
    }

    clearCanvas() {
        if (confirm('¿Estás seguro de que quieres borrar todo el dibujo?')) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.saveDrawing();
            this.showSavedIndicator();
        }
    }

    saveDrawing() {
        try {
            const imageData = this.canvas.toDataURL();
            const drawingData = {
                image: imageData,
                timestamp: new Date().toISOString(),
                canvasWidth: this.canvas.width,
                canvasHeight: this.canvas.height
            };
            
            // Guardar en localStorage
            localStorage.setItem('savedDrawing', JSON.stringify(drawingData));
            console.log('Dibujo guardado automáticamente');
        } catch (error) {
            console.error('Error al guardar el dibujo:', error);
            // Fallback: guardar en memoria si localStorage no está disponible
            window.savedDrawing = drawingData;
        }
    }

    loadDrawing() {
        try {
            // Intentar cargar desde localStorage
            const savedDataStr = localStorage.getItem('savedDrawing');
            let savedData = null;
            
            if (savedDataStr) {
                savedData = JSON.parse(savedDataStr);
            } else {
                // Fallback: cargar desde memoria
                savedData = window.savedDrawing;
            }
            
            if (savedData && savedData.image) {
                const img = new Image();
                img.onload = () => {
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
                };
                img.src = savedData.image;
            }
        } catch (error) {
            console.error('Error al cargar el dibujo:', error);
        }
    }

    downloadDrawing() {
        try {
            // Crear un canvas temporal con fondo blanco
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            tempCanvas.width = this.canvas.width;
            tempCanvas.height = this.canvas.height;
            
            // Llenar con fondo blanco
            tempCtx.fillStyle = '#ffffff';
            tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
            
            // Dibujar el contenido actual encima
            tempCtx.drawImage(this.canvas, 0, 0);
            
            // Descargar
            const link = document.createElement('a');
            link.download = `mi-dibujo-${new Date().toISOString().split('T')[0]}.png`;
            link.href = tempCanvas.toDataURL();
            link.click();
        } catch (error) {
            console.error('Error al descargar el dibujo:', error);
            alert('Error al descargar el dibujo');
        }
    }

    showSavedIndicator() {
        const indicator = document.getElementById('savedIndicator');
        indicator.classList.add('show');
        setTimeout(() => {
            indicator.classList.remove('show');
        }, 2000);
    }
}

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    new DrawingApp();
});

// Prevenir el scroll en dispositivos móviles al dibujar
document.addEventListener('touchstart', (e) => {
    if (e.target.tagName === 'CANVAS') {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchend', (e) => {
    if (e.target.tagName === 'CANVAS') {
        e.preventDefault();
    }
}, { passive: false });

document.addEventListener('touchmove', (e) => {
    if (e.target.tagName === 'CANVAS') {
        e.preventDefault();
    }
}, { passive: false });