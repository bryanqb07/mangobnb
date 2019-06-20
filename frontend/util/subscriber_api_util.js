export const postSubscriber = subscriber => (
    $.ajax({
        method: "POST",
        url: "/api/subscribers",
        data: { subscriber }
    })
);

export const postContactForm = contact_form =>(
    $.ajax({
    method: "POST",
    url: "/api/contact_forms",
    data: { contact_form }
    })
);
