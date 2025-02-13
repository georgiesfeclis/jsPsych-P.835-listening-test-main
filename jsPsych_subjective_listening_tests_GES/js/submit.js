function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function submit(json_data, code) {
    for(let i=0; i<3; i++) {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
    
        try {
            const response = await fetch("/submit/" + code, {
                method: "POST",
                body: JSON.stringify(json_data),
                headers: myHeaders,
            });
    
            if (!response.ok) {
                // Wait a bit and re-try
                console.log('error submitting results, waiting then trying again')
                await sleep(1500);
            } else {
                return; // All done
            }
        } catch (error) {
            console.log('submit error: ' + error)
        }
    }
}
