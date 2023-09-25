const checkData = (startCheckData, setDataSuccessful, val) => {
    if (!startCheckData) return;
    if (val === '') {
        setDataSuccessful(false);
    }
};

export default checkData;
