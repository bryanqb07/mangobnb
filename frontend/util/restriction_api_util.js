export const postRestriction = restriction => (
    $.ajax({
        method: 'POST',
        url: `api/restrictions/`,
        data: { restriction }
    })
); 