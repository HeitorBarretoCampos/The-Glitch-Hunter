export const analyzeCode = (code) => {
    const maliciousPatterns = ["DROP TABLE", "OR 1=1", "<script>", "admin' --"];
    const isGlitch = maliciousPatterns.some(pattern => code.toUpperCase().includes(pattern));
    return isGlitch ? "DANGER" : "SAFE";
};