const Footer = () => {
    return (
        <footer className="py-12 border-t border-gray-200 text-center">
            <p className="text-sm text-brand-muted">
                © {new Date().getFullYear()} Madison. Designed & Built with Precision.
            </p>
            <a
                href="https://madison-t.github.io/my-portfolio-v2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-muted hover:text-brand-accent trasition-colors duration-300"
            >
                View previous portfoio →
                </a>
        </footer>
    )
}

export default Footer
