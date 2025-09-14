(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__dc15d093._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
;
// In a real app, you would use the Firebase Admin SDK to verify the token.
// For example: import { getAuth } from 'firebase-admin/auth';
async function verifyAuth(request) {
    const token = request.cookies.get('AuthToken')?.value;
    // The admin user ID you provided.
    const adminUid = "ilkjHJldx1OskTlWMn1erTCZoN62";
    if (!token) {
        // If there is no token, the user is not authenticated.
        return {
            isAuthenticated: false,
            isAdmin: false,
            uid: null
        };
    }
    // --- REAL IMPLEMENTATION ---
    // In a real app, you would uncomment and use this block.
    /*
  try {
    // This verifies the token is valid and hasn't been tampered with.
    const decodedToken = await getAuth().verifyIdToken(token);
    // Check for the 'admin' custom claim.
    const isAdmin = decodedToken.admin === true;
    return { isAuthenticated: true, isAdmin, uid: decodedToken.uid };
  } catch (error) {
    // If verification fails, treat the user as unauthenticated.
    console.error('Auth token verification failed:', error);
    return { isAuthenticated: false, isAdmin: false, uid: null };
  }
  */ // --- PROTOTYPE SIMULATION ---
    // For this prototype, we'll simulate the verification process.
    if (token === 'admin-super-secret-token') {
        return {
            isAuthenticated: true,
            isAdmin: true,
            uid: adminUid
        };
    }
    if (token === 'user-secret-token') {
        return {
            isAuthenticated: true,
            isAdmin: false,
            uid: 'a-regular-user'
        };
    }
    return {
        isAuthenticated: false,
        isAdmin: false,
        uid: null
    };
}
async function middleware(request) {
    const { pathname } = request.nextUrl;
    const { isAuthenticated, isAdmin } = await verifyAuth(request);
    const isAuthPage = pathname.startsWith('/login') || pathname.startsWith('/signup');
    const isAdminLoginPage = pathname === '/admin/login';
    const isAppPage = pathname.startsWith('/dashboard') || pathname.startsWith('/matching') || pathname.startsWith('/chat');
    // Protect the /admin routes
    if (pathname.startsWith('/admin') && !isAdminLoginPage) {
        if (!isAuthenticated || !isAdmin) {
            // If not an admin, redirect to the admin login page.
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/admin/login', request.url));
        }
    }
    // If an authenticated admin tries to access a regular user page, redirect them to admin dashboard
    if (isAuthenticated && isAdmin && isAppPage) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/admin/dashboard', request.url));
    }
    // If an authenticated user tries to access login/signup, redirect to dashboard
    if (isAuthenticated && !isAdmin && isAuthPage && !isAdminLoginPage) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/dashboard', request.url));
    }
    // Protect all other app routes
    if (isAppPage) {
        if (!isAuthenticated) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/login', request.url));
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    // This matcher ensures the middleware runs on all relevant pages.
    matcher: [
        '/admin/:path*',
        '/dashboard/:path*',
        '/matching/:path*',
        '/chat/:path*',
        '/login',
        '/signup'
    ]
};
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__dc15d093._.js.map