package com.example.demo.controller;

import com.example.demo.model.Data;
import com.example.demo.repository.DataRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/data")
public class DataController {

    @Autowired
    private DataRepository dataRepository;

    @GetMapping
    public List<Data> getAllData() {
        return dataRepository.findAll();
    }

    @PostMapping
    public Data createData(@RequestBody Data data) {
        return dataRepository.save(data);
    }
}
