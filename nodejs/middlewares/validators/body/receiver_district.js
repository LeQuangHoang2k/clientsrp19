const { body } = require("express-validator");

exports.checkReceiverDistrict = async (req, res, next) => {
  await body("receiver_district", "Undefined or null")
    .exists({ checkFalsy: true })
    .run(req);

  await body("receiver_district", "Length from 8 to 16")
    .isLength({ min: 1, max: 255 })
    .run(req);

  await body("receiver_district", "Only Alphabet and number")
    .matches(/^[aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ0-9\s]+$/)
    .run(req);
};
