// Função que o professor vai querer ver sendo testada
export const analyzeCode = (code) => {
    const maliciousPatterns = ["DROP TABLE", "OR 1=1", "<script>"];
    
    // Se encontrar algum padrão malicioso, retorna que é um "Glitch"
    const isGlitch = maliciousPatterns.some(pattern => code.includes(pattern));
    
    return isGlitch ? "DANGER" : "SAFE";
};