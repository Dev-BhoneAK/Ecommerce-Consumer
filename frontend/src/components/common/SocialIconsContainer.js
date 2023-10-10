import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    VKShareButton,
    VKIcon,
} from 'react-share';

function SocialIconsContainer() {
    const handleCopy = async () => {
        const url = window.location.href;
        await navigator.clipboard.writeText(url);
        // showToast();
    };
    return (
        <ul className="social-icons-container">
            <li>
                <TwitterShareButton
                    className="d-flex align-items-center justify-content-center"
                    url={'https://www.example.com'}
                    quote={'Dummy text!'}
                    hashtag="#muo"
                    aria-label="twitter-share-button"
                >
                    <i className="fa-brands fa-x-twitter social-icon" />
                </TwitterShareButton>
            </li>
            <li>
                <FacebookShareButton
                    className="d-flex align-items-center justify-content-center"
                    url={'https://www.example.com'}
                    quote={'Dummy text!'}
                    hashtag="#muo"
                    aria-label="facebook-share-button"
                >
                    <i className="fa-brands fa-facebook social-icon" />
                </FacebookShareButton>
            </li>
            <li>
                <VKShareButton
                    className="d-flex align-items-center justify-content-center"
                    url={'https://www.example.com'}
                    quote={'Dummy text!'}
                    hashtag="#muo"
                    aria-label="vk-share-button"
                >
                    <i className="fa-brands fa-vk social-icon" />
                </VKShareButton>
            </li>
            <li>
                <div
                    className="icon-container d-flex align-items-center justify-content-center"
                    onClick={handleCopy}
                    aria-label="copy-link-button"
                >
                    <i className="fa-solid fa-link social-icon"></i>
                </div>
            </li>
        </ul>
    );
}

export default SocialIconsContainer;
