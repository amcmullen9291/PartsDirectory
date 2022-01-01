package com.parts_directory.Controller;

import com.parts_directory.Exception.ResourceNotFoundException;
import com.parts_directory.Model.Part;
import com.parts_directory.Repository.PartsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/parts")

public class PartsController {

    @Autowired
    private PartsRepository partsRepository;

    @GetMapping("/inventory")
    @CrossOrigin(origins = {"http://localhost:3000", " http://192.168.1.69:3000", "http://localhost:8080"})
    public List<Part> getAllParts(){
        return partsRepository.findAll();
    }

    @PostMapping("/inventory/add_item")
    @CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000", " http://192.168.1.69:3000"})
    public Part addItem(@RequestBody Part newPart){
        return partsRepository.save(newPart);
    }

    @PutMapping("/inventory/update/{id}")
    @CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000", " http://192.168.1.69:3000"})
    public ResponseEntity<Part> updateItem(@PathVariable(value = "id")long id, @RequestBody Part partDetails)
            throws ResourceNotFoundException{
        Part part = partsRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id + ": not found"));

        part.setPartName(partDetails.getPartName());
        part.setPartNumber(partDetails.getPartNumber());
        part.setPrice(partDetails.getPrice());
        part.setDepartment(partDetails.getDepartment());
        part.setAisleNumber(partDetails.getAisleNumber());
        part.setManufacturer(partDetails.getManufacturer());
        part.setImage(partDetails.getImage());

        final Part updateItem = partsRepository.save(part);

        return ResponseEntity.ok(updateItem);
    }

    @DeleteMapping("/inventory/delete/{id}")
    @CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000", " http://192.168.1.69:3000"})
    public Map<Long, String> removeItem(@PathVariable long id)throws ResourceNotFoundException {

        Part part = partsRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id not found"));
        partsRepository.delete(part);
        Map<Long, String> response = new HashMap<>();
        response.put(id, "Deleted");
        return response;
    }

    @GetMapping("inventory/item/{id}")
    @CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000", " http://192.168.1.69:3000"})
    public Map<Long, Part> selectedItem(@PathVariable long id)throws ResourceNotFoundException{
        Part part = partsRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id not found"));
        Map<Long, Part> response = new HashMap<>();
        response.put(id, part);
        return response;
    }

    @GetMapping("/inventory/search/Department/{department}")
    @CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000", " http://192.168.1.69:3000"})
    public List<Part> findByDepartment(@PathVariable String department)throws ResourceNotFoundException {

        List<Part> response = partsRepository.findByDepartment(department);
        return response;
    }

    @GetMapping("/inventory/search/item_number/{part_number}")
    @CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000", " http://192.168.1.69:3000"})
    public List<Part> findByPartNumber(@PathVariable String part_number)throws ResourceNotFoundException {

        List<Part> response = partsRepository.findByPartNumber(part_number);
        return response;
    }

}