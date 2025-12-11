import html2canvas from 'html2canvas';

export const formatPrice = (price: number) => price.toLocaleString();

export const downloadPDF = (element: HTMLElement | null, title: string) => {
  if (!element) return;

  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('팝업이 차단되었습니다. 팝업을 허용해주세요.');
    return;
  }

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css" />
      <style>
        @page { size: A4; margin: 0; }
        html, body { margin: 0; padding: 0; width: 210mm; height: 297mm; }
        * { margin: 0; padding: 0; box-sizing: border-box; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        body { font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif; }
      </style>
    </head>
    <body>
      ${element.outerHTML}
      <script>setTimeout(() => { window.print(); window.close(); }, 500);</script>
    </body>
    </html>
  `);
  printWindow.document.close();
};

export const downloadJPEG = async (element: HTMLElement | null, filename: string) => {
  if (!element) return;

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    });

    const link = document.createElement('a');
    link.download = filename;
    link.href = canvas.toDataURL('image/jpeg', 0.95);
    link.click();
  } catch (error) {
    console.error('JPEG 저장 실패:', error);
    alert('JPEG 저장에 실패했습니다.');
  }
};

export const PRETENDARD_LINK = 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css';
