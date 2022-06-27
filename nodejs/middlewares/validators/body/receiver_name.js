const { body } = require("express-validator");

exports.checkReceiverName = async (req, res, next) => {
  await body("receiver_name", "Undefined or null")
    .exists({ checkFalsy: true })
    .run(req);

  await body("receiver_name", "Length from 8 to 16")
    .isLength({ min: 1, max: 255 })
    .run(req);

  await body("receiver_name", "Only Alphabet and number")
    .matches(/^[aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ0-9\s]+$/)
    .run(req);
};
