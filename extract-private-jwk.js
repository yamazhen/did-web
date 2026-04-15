import * as jose from "jose";
import { readFileSync } from "fs";

const pem = readFileSync("./privkey.pem", "utf8");
const key = await jose.importPKCS8(pem, "PS256", { extractable: true });
const jwk = await jose.exportJWK(key);
jwk.alg = "PS256";
jwk.kid = "X509-JWK";
console.log(JSON.stringify(jwk, null, 2));
