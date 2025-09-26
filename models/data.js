const booksData = [
    {
        bookId: "1",
        bookNamed: "Đắc Nhân Tâm",
        bookPriced: "50000₫",
        bookAuthord: "Dale Carnegie",
        bookTitled: "Bìa mềm",
        bookPaged: "319",
        bookPublicationDated: "03/2018",
        bookPublisherd: "NXB Tổng hợp TP. Hồ Chí Minh",
        bookStatusd: "Mới",
        bookQuantity:1,
    },
    {
        bookId: "2",
        bookNamed: "Từ Điển Cách Dùng Tiếng Anh",
        bookPriced: "180000₫",
        bookAuthord: "Lê Đình Bì, M.A",
        bookTitled: "Bìa cứng",
        bookPaged: "967",
        bookPublicationDated: "03/2016",
        bookPublisherd: "NXB Trẻ",
        bookStatusd: "Đã qua sử dụng",
        bookQuantity:1
    },
    {
        bookId: "3",
        bookNamed: "Trên Đường Băng",
        bookPriced: "50000₫",
        bookAuthord: "Tony Buổi Sáng",
        bookTitled: "Bìa mềm",
        bookPaged: "301",
        bookPublicationDated: "04/2019",
        bookPublisherd: "NXB Trẻ",
        bookStatusd: "Đã qua sử dụng",
        bookQuantity:1
    },
    {
        bookId: "4",
        bookNamed: "Think And Grow Rich",
        bookPriced: "70000₫",
        bookAuthord: "Napoleon Hill",
        bookTitled: "Bìa mềm",
        bookPaged: "399",
        bookPublicationDated: "Không rõ",
        bookPublisherd: "Công ty xuất bản: Thái Hà Books, NXB Lao Động",
        bookStatusd: "Đã qua sử dụng",
        bookQuantity:1
    },
    {
        bookId: "5",
        bookNamed: "Vạn Xuân",
        bookPriced: "800000₫",
        bookAuthord: "Yveline Feray",
        bookTitled: "Bìa mềm",
        bookPaged: "1213",
        bookPublicationDated: "Không rõ",
        bookPublisherd: "NXB Văn Học & Sudestasie",
        bookStatusd: "Đã qua sử dụng",
        bookQuantity:1
    },
    {
        bookId: "6",
        bookNamed: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
        bookPriced: "50000₫",
        bookAuthord: "Rosie Nguyễn",
        bookTitled: "Bìa mềm",
        bookPaged: "285",
        bookPublicationDated: "2017",
        bookPublisherd: "Công ty phát hành: Nhã Nam, NXB Hội Nhà Văn",
        bookStatusd: "Mới",
        bookQuantity:1
    },
    {
        bookId: "7",
        bookNamed: "7 Thói Quen Thành Đạt",
        bookPriced: "70000₫",
        bookAuthord: "Stephen R. Covey",
        bookTitled: "Bìa mềm",
        bookPaged: "440",
        bookPublicationDated: "Không rõ",
        bookPublisherd: "Công ty xuất bản: TGM Books, NXB Phụ nữ",
        bookStatusd: "Đã qua sử dụng",
        bookQuantity:1
    },
    {
        bookId: "8",
        bookNamed: "Những Triết Gia Thiên Chúa Giáo Thế Kỷ Hai Mươi",
        bookPriced: "140000₫",
        bookAuthord: "Phan Quang Định",
        bookTitled: "Bìa cứng",
        bookPaged: "658",
        bookPublicationDated: "2014",
        bookPublisherd: "NXB Hồng Đức",
        bookStatusd: "Mới",
        bookQuantity:1
    },
    {
        bookId: "9",
        bookNamed: "10 Vạn Câu Hỏi Vì Sao",
        bookPriced: "315000₫ 250000₫",
        bookAuthord: "Trung Tâm Xuất Bản Biên Tập 10 Vạn Câu Hỏi Vì Sao",
        bookTitled: "Bìa mềm",
        bookPaged: "Không rõ (7 tập)",
        bookPublicationDated: "Không rõ",
        bookPublisherd: "NXB Lao Động",
        bookStatusd: "Mới",
        bookQuantity:1
    },
    {
        bookId: "10",
        bookNamed: "Lịch Sử Các Loại Vũ Khí Thành Cho Thiếu Niên",
        bookPriced: "179000₫ 140000₫",
        bookAuthord: "Will Fowler",
        bookTitled: "Bìa cứng",
        bookPaged: "130",
        bookPublicationDated: "Không rõ",
        bookPublisherd: "NXB Thế Giới",
        bookStatusd: "Mới",
        bookQuantity:1
    }



];

const books = booksData.map((b)=>{
    new Book(
        b.bookId,
        b.bookNamed,
        b.bookPriced,
        b.bookAuthord,
        b.bookTitled,
        b.bookPaged,
        b.bookPublicationDated,
        b.bookPublisherd,
        b.bookStatusd,
        b.bookQuantity
    )
});


