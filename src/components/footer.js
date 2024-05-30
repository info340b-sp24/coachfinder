import React from "react";

export function FooterComponent(props)
{
    return (
        <footer id="home-footer" className="home-footer">
            <div className="container text-white">
            <p className="text-center mt-0 mb-0">This website was created by ...</p>
            <address className="text-center mt-0 mb-0">
                Contact us at <a href="mailto:me@here.com">me@here.com</a>, or at <a href="tel:555-123-4567">(555) 123-4567</a>.
            </address>
            <p className="text-center mt-0 mb-0">&copy; 2024 The Author.</p>
            </div>
        </footer>
    )
}