package com.example.library.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.library.entity.Book;
import com.example.library.repository.BookRepository;
import java.util.List;

@RestController
@RequestMapping("/books")
@CrossOrigin
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @PostMapping("/add")
    public Book addBook(@RequestBody Book book){
        return bookRepository.save(book);
    }

    @GetMapping
    public List<Book> allBooks() {
        return bookRepository.findAll();
    }

    @GetMapping("/search/{title}")
    public List<Book> searchByTitle(@PathVariable String title) {
        return bookRepository.findByTitleContaining(title);
    }

    @GetMapping("/filter/{status}")
    public List<Book> filterByStatus(@PathVariable String status) {
        return bookRepository.findByAvailabilityStatus(status);
    }

}