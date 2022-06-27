const { body } = require("express-validator");

exports.checkReceiverCity = async (req, res, next) => {
  await body("receiver_city", "Undefined or null")
    .exists({ checkFalsy: true })
    .run(req);

  await body("receiver_city", "Length from 8 to 16")
    .isLength({ min: 1, max: 255 })
    .run(req);

  await body("receiver_city", "Only Alphabet")
    .matches(/^[aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ\s]+$/)
    .run(req);
};
