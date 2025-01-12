function Book(title, author, numPages, read){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
    this.info = function (){
        // let readStatus = this.read == true ? "read" : "not read yet";
        if(this.read === true){
            readStatus = "read";
        } else {
            readStatus = "not read yet";
        }
        
        const string = `${this.title} ${this.author} ${this.numPages} pages ${readStatus}`; //template literals
        console.log(string);
        // console.log(this.title + " " + this.author + " " + this.numPages + " pages" + " " + readStatus)
    }
}

const hobbit = new Book("The Hobbit", "JRR Tolkien", 295, false);
hobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
