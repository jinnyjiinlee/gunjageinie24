export function createCouponCanvas(): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('Canvas not supported');

  canvas.width = 800;
  canvas.height = 500;

  drawCouponBackground(ctx);
  drawCouponHoles(ctx);
  drawCouponBorder(ctx);
  drawCouponText(ctx);

  return canvas;
}

function drawCouponBackground(ctx: CanvasRenderingContext2D) {
  const gradient = ctx.createLinearGradient(0, 0, 800, 0);
  gradient.addColorStop(0, '#FFD700');
  gradient.addColorStop(1, '#FFA500');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 800, 500);
}

function drawCouponHoles(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#0A0A0A';
  ctx.beginPath();
  ctx.arc(0, 250, 30, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(800, 250, 30, 0, Math.PI * 2);
  ctx.fill();
}

function drawCouponBorder(ctx: CanvasRenderingContext2D) {
  ctx.strokeStyle = 'rgba(10, 10, 10, 0.3)';
  ctx.lineWidth = 4;
  ctx.setLineDash([10, 8]);
  ctx.strokeRect(50, 50, 700, 400);
  ctx.setLineDash([]);
}

function drawCouponText(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#0A0A0A';
  ctx.textAlign = 'center';

  ctx.font = 'bold 24px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('군자역 지니24 스터디카페', 400, 100);

  ctx.font = 'bold 52px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('충전권 보너스 쿠폰', 400, 165);

  // 선착순 10명 뱃지
  ctx.fillStyle = '#F04452';
  ctx.beginPath();
  ctx.roundRect(300, 180, 200, 36, 18);
  ctx.fill();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 20px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('선착순 10명 한정!', 400, 205);

  ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
  ctx.fillRect(150, 230, 500, 120);

  ctx.fillStyle = '#0A0A0A';
  ctx.font = 'bold 32px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillText('200시간 → +20시간 추가', 400, 280);
  ctx.fillText('300시간 → +60시간 추가', 400, 325);

  ctx.font = '22px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle = 'rgba(10, 10, 10, 0.8)';
  ctx.fillText('홈페이지 방문자 한정 혜택', 400, 395);

  ctx.font = '18px -apple-system, BlinkMacSystemFont, sans-serif';
  ctx.fillStyle = 'rgba(10, 10, 10, 0.6)';
  ctx.fillText('네이버 톡톡으로 이 쿠폰을 보내주세요!', 400, 430);
}

export function isMobileDevice(): boolean {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

export function openMobileCouponPage(dataUrl: string) {
  const newWindow = window.open('', '_blank');
  if (!newWindow) {
    alert('팝업이 차단되었습니다. 팝업을 허용해주세요.');
    return;
  }

  newWindow.document.write(getMobileCouponHTML(dataUrl));
  newWindow.document.close();
}

function getMobileCouponHTML(dataUrl: string): string {
  return `<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>쿠폰 저장</title>
  <style>
    body { margin: 0; padding: 20px; background: #0A0A0A; display: flex; flex-direction: column; align-items: center; min-height: 100vh; box-sizing: border-box; }
    img { max-width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
    p { color: #00FF88; text-align: center; margin-top: 20px; font-size: 18px; font-weight: bold; font-family: -apple-system, BlinkMacSystemFont, sans-serif; }
    .sub { color: #888; font-size: 14px; font-weight: normal; margin-top: 8px; }
  </style>
</head>
<body>
  <img src="${dataUrl}" alt="충전권 보너스 쿠폰" />
  <p>이미지를 길게 눌러서 저장하세요!</p>
  <p class="sub">저장 후 네이버 톡톡으로 보내주세요</p>
</body>
</html>`;
}

export function downloadCouponPC(dataUrl: string) {
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = '지니24_충전권_쿠폰.png';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
