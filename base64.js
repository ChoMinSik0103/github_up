// 아스키 문자로 이루어진 문자열을 Base64로 변환하는 함수
function base64Encode(input) {
    // Base64 문자표
    const base64Table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    let binaryStr = '';

    // 1. 문자 → 2진수 변환
    for (let i = 0; i < input.length; i++) {
        const ascii = input.charCodeAt(i);  // 문자 → 아스키 코드
        const binary = ascii.toString(2).padStart(8, '0');  // 8비트 2진수로 변환
        binaryStr += binary;

console.log(ascii);
console.log(binary);
console.log(binaryStr);

    }

    // 2. 6비트씩 끊어서 Base64 문자로 변환
    let base64Result = '';
    for (let i = 0; i < binaryStr.length; i += 6) {
        let chunk = binaryStr.substr(i, 6);
        
        // 마지막 조각이 6비트보다 짧으면 0으로 채우기
        if (chunk.length < 6) {
            chunk = chunk.padEnd(6, '0');
        }

        const index = parseInt(chunk, 2);  // 6비트 → 10진수
        base64Result += base64Table[index];
    }

    // 3. '=' 패딩 처리 (원래 데이터 길이 기준)
    const remainder = input.length % 3;
    if (remainder === 1) {
        base64Result += '==';
    } else if (remainder === 2) {
        base64Result += '=';
    }

    return base64Result;
}

// 🔥 테스트
const originalText = "cmscp";
const encodedText = base64Encode(originalText);

console.log(`원본 텍스트: ${originalText}`);
console.log(`Base64 변환 결과: ${encodedText}`);