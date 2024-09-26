function addMatrices() {
    // Get values from Matrix 1
    let m1r1c1 = parseInt(document.getElementById('matrix1-one').value) || 0;
    let m1r1c2 = parseInt(document.getElementById('matrix1-two').value) || 0;
    let m1r2c1 = parseInt(document.getElementById('matrix1-three').value) || 0;
    let m1r2c2 = parseInt(document.getElementById('matrix1-four').value) || 0;

    // Get values from Matrix 2
    let m2r1c1 = parseInt(document.getElementById('matrix2-one').value) || 0;
    let m2r1c2 = parseInt(document.getElementById('matrix2-two').value) || 0;
    let m2r2c1 = parseInt(document.getElementById('matrix2-three').value) || 0;
    let m2r2c2 = parseInt(document.getElementById('matrix2-four').value) || 0;
    
    // Perform matrix addition
    let resr1c1 = m1r1c1 + m2r1c1;
    let resr1c2 = m1r1c2 + m2r1c2;
    let resr2c1 = m1r2c1 + m2r2c1;
    let resr2c2 = m1r2c2 + m2r2c2;

    // Display result in the Result Matrix
    document.getElementById('result1-one').value = resr1c1;
    document.getElementById('result1-two').value = resr1c2;
    document.getElementById('result1-three').value = resr2c1;
    document.getElementById('result1-four').value = resr2c2;
}
