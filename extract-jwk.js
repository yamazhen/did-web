import * as jose from "jose";
import { readFileSync } from "fs";

const cert = readFileSync("./cert.pem", "utf8");
const key = await jose.importX509(cert, "PS256", { extractable: true });
const jwk = await jose.exportJWK(key);
jwk.alg = "PS256";
jwk.kid = "X509-JWK";
jwk.x5u = "https://zhen.software/.well-known/x509CertificateChain.pem";
console.log(JSON.stringify(jwk, null, 2));
