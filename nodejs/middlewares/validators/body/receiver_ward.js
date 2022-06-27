const { body } = require("express-validator");

exports.checkReceiverWard = async (req, res, next) => {
  await body("receiver_ward", "Undefined or null")
    .exists({ checkFalsy: true })
    .run(req);

  await body("receiver_ward", "Length from 8 to 16")
    .isLength({ min: 1, max: 255 })
    .run(req);

  await body("receiver_ward", "Only Alphabet")
    .matches(/^[aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ0-9\s]+$/)
    .run(req);
};
