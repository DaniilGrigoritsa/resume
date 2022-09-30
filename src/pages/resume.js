import '../App.css';
import img from '../media/photo.jpg';

export const Form = () => {
    return (
        <div className="form">
            <img src={img} alt='my photo'/>
            <h1>Danil Grigorița</h1>
            <h2 id='description'>I'm junior Solidity and web3 developer!</h2>
            <hr class="line"/>
            <h2>My personal skills:</h2>
            <p>
                I have experience in writing, testing and verifying 
                solidity smart contracts. Personaly developed 
                decentralised applications on ethereum blockchain.
            </p>
            <hr class="line"/>
            <h2>My stack:</h2>
            <p>
                Solidity, JavaScript, Blockchain, Ethereum, bilding dApps
                with web3.js, ethers.js, hardhat, openzeppelin
            </p>
            <hr class="line"/>
            <h2>What I can do:</h2>
            <p>
                Tokens (ERC20, ERC721, ERC1155), ICO, NFT marketplaces,
                audit smart contracts with unit tests and additional 
                libraries and miltiple purpose smart contracts
            </p>
        </div>
    )
}