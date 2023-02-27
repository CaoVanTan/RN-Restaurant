export const FormatCurrency = (params) => {
    const resultAfterFormating = Number(params).toLocaleString();
    const toVnd = resultAfterFormating.replace(',', '.');
    return toVnd;
};

export default function FormatNumberChange(params) {
    const rawData = params?.replace(/,/g, '');
    const cookData = rawData.replace('Rp', '');
    return Number(cookData);
}
