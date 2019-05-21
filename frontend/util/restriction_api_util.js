export const postRestrictions = restrictions =>
         $.ajax({
           method: "POST",
           url: `api/restrictions/`,
           data: { restrictions }
         });

export const postPrice = restriction => (
    $.ajax({
        method: 'POST',
        url: `api/restrictions/`,
        data: { restriction }
    })
); 