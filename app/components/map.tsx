export default function GoogleMapEmbed() {
    return (
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d931.1670793272987!2d105.80566229477435!3d21.00592871950089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad42af960c3d%3A0x65b82c0bc6d1701e!2zMjMgxJAuIEzDqiBWxINuIEzGsMahbmcsIE5ow6JuIENow61uaCwgVGhhbmggWHXDom4sIEjDoCBO4buZaSAxMDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700112403305!5m2!1svi!2s"
            style={{ border: 0 }}
            className="w-full h-[500px] mb-20 px-10" 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    );
}
