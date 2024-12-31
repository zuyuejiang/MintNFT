require("dotenv").config();
async function run() {
    const { create } = await import('ipfs-http-client');
    const ipfs = create();
    
    // IPFS CID 
    const imageUrl = `https://ipfs.io/ipfs/${process.env.NFT_CID}`;
    // three attributes
    const metadata = {
        path: '/',
        content: JSON.stringify({
            name: "My First NFT",
            attributes: [
            {
                "trait_type": "Peace",
                "value": "10" 
            },
            {
                "trait_type": "Love",
                "value": "100"
            },
            {
                "trait_type": "Web3",
                "value": "1000"
            }
            ],
            image: imageUrl,
            description: "So much PLW3!"
        })
    };

    const result = await ipfs.add(metadata);
    console.log(result);

    process.exit(0);
}

run();