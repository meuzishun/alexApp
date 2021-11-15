function gatherInputs() {
    const iframe = document.querySelector('iframe#iFrameResizer0');

    const inputs = {
        ageInput: iframe.contentWindow.document.querySelectorAll('#age-input')[0],
        genderInput: iframe.contentWindow.document.querySelectorAll('#gender-input')[0],
        zipInput: iframe.contentWindow.document.querySelectorAll('#zipcode-input')[0],
        termInput: iframe.contentWindow.document.querySelectorAll('#term-input')[0],
        coverageInput: iframe.contentWindow.document.querySelectorAll('#slider')[0],
    }
    console.log(inputs);

    const results = {
        bestHealth: iframe.contentWindow.document.querySelectorAll('.sc-AykKC.sc-fzXfNc.higPoL')[0],
        goodHealth: iframe.contentWindow.document.querySelectorAll('.sc-AykKC.sc-fzXfNc.higPoL')[1],
        averageHealth: iframe.contentWindow.document.querySelectorAll('.sc-AykKC.sc-fzXfNc.higPoL')[2],
    }
    console.log(results);

    inputs.ageInput.value = 45;
    inputs.zipInput.value = '02199';
    inputs.genderInput.value = 'F';
    inputs.genderInput.dispatchEvent();
    for (const result in results) {
        console.log(results[result].textContent);
    };
    
}

