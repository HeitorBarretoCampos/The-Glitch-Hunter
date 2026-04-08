export const analyzeCode = (code) => {
    if (typeof code !== 'string' || !code) return 'SAFE';

    const maliciousPatterns = [
        "DROP TABLE", 
        "OR 1=1", 
        "<SCRIPT>", 
        "ADMIN' --", 
        "DELETE FROM",
        "STEALCOOKIES"
    ];
    
    const isGlitch = maliciousPatterns.some(pattern => 
        code.toUpperCase().includes(pattern)
    );

    return isGlitch ? "DANGER" : "SAFE";
};