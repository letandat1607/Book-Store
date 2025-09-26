class Book {
  constructor(bookId, bookName, bookPrice, bookAuthor, bookTitle, bookPage, bookPublicationDate, bookPublisher, bookStatus, bookQuantity) {
    this.bookId = bookId;   //ID
    this.bookName = bookName; // Tên
    this.bookPrice = bookPrice; // GIá
    this.bookAuthor = bookAuthor;// Tác giả
    this.bookTitle = bookTitle; // Nhãn
    this.bookPage = bookPage; // Số trang
    this.bookPublicationDate = bookPublicationDate; // ngày xuất bản
    this.bookPublisher = bookPublisher; // nhà xuất bảng
    this.bookStatus = bookStatus; // tình trạng
    this.bookQuantity = bookQuantity;// số lượng
  }
}
