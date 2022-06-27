const { body } = require("express-validator");

exports.checkReceiverAddress = async (req, res, next) => {
  await body("receiver_address", "Undefined or null")
    .exists({ checkFalsy: true })
    .run(req);

  await body("receiver_address", "Length from 8 to 16")
    .isLength({ min: 1, max: 255 })
    .run(req);

  await body("receiver_address", "Only Alphabet, number and space")
    .matches(/^[aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ0-9\s]+$/)
    .run(req);
};
