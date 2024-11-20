function showModels(brand) {
    const specsDiv = document.getElementById('specs');

    let content = '';

    // Mock data for different brands
    switch (brand) {
        case 'brand1':
            content = `
                <h3>Brand 1 Models</h3>
                <ul>
                    <li>Model A - Engine: 250cc, Power: 30HP</li>
                    <li>Model B - Engine: 350cc, Power: 40HP</li>
                    <li>Model C - Engine: 450cc, Power: 50HP</li>
                </ul>
            `;
            break;
        case 'brand2':
            content = `
                <h3>Brand 2 Models</h3>
                <ul>
                    <li>Model X - Engine: 300cc, Power: 35HP</li>
                    <li>Model Y - Engine: 400cc, Power: 45HP</li>
                    <li>Model Z - Engine: 500cc, Power: 55HP</li>
                </ul>
            `;
            break;
        case 'brand3':
            content = `
                <h3>Brand 3 Models</h3>
                <ul>
                    <li>Model Alpha - Engine: 200cc, Power: 25HP</li>
                    <li>Model Beta - Engine: 250cc, Power: 30HP</li>
                    <li>Model Gamma - Engine: 300cc, Power: 35HP</li>
                </ul>
            `;
            break;
        case 'brand4':
            content = `
                <h3>Brand 4 Models</h3>
                <ul>
                    <li>Model R1 - Engine: 500cc, Power: 60HP</li>
                    <li>Model R2 - Engine: 600cc, Power: 70HP</li>
                    <li>Model R3 - Engine: 750cc, Power: 80HP</li>
                </ul>
            `;
            break;
        default:
            content = '<p>Select a valid brand to view its models.</p>';
            break;
    }

    specsDiv.innerHTML = content;
}
