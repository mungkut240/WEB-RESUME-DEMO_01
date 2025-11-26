// ฟังก์ชันสำหรับปุ่มพิมพ์
document.addEventListener('DOMContentLoaded', function() {
    const printButton = document.getElementById('printBtn');
    
    if (printButton) {
        printButton.addEventListener('click', function() {
            window.print();
        });
    }
});