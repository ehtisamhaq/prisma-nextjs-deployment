export const checkAuth = (...authRoles) => async (req, res, next) => {
    try {
        //Session Token Verification
        const sessionToken = req.cookies["__Secure-session_token"] || req.cookies["session_token"];
        if (!sessionToken) {
            throw new Error("Unauthorized access! No session token provided.");
        }
        // ======================= VERIFY COOKIE =======================
        // ======================= VERIFY USER ACCESS AND OTHERS =======================
        // ======================= VERIFY USER ROLE  =======================
        next();
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=auth.js.map