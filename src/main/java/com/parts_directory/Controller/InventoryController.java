package com.parts_directory.Controller;

import com.parts_directory.Exception.ResourceNotFoundException;
import com.parts_directory.Model.Part;
import com.parts_directory.Repository.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/Parts")
public class InventoryController {

    @Autowired
    private InventoryRepository inventoryRepository;

    @GetMapping("/inventory")
    @CrossOrigin(origins = {"http://localhost:3000", " http://192.168.1.69:3000", "http://localhost:8080"})
    public List<Part> getAllBreeds(){
        return inventoryRepository.findAll();
    }

    @PostMapping("/newInventory")
    @CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000", " http://192.168.1.69:3000"})
    public Part addPart(@RequestBody Part newPart){
        return inventoryRepository.save(newPart);
    }

    @PutMapping("/inventory/{id}")
    @CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000", " http://192.168.1.69:3000"})
    public ResponseEntity<Part> updateBreed(@PathVariable(value = "id")long id, @RequestBody Part partDetails)
            throws ResourceNotFoundException{
        Part newPart = inventoryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException(id + ": not found"));

        newPart.setPartName(partDetails.getPartName());
        newPart.setPartNumber(partDetails.getPartNumber());
        newPart.setPrice(partDetails.getPrice());
        newPart.setAisleNumber(partDetails.getAisleNumber());
        newPart.setDepartment(partDetails.getDepartment());
        newPart.setManufacturer(partDetails.getManufacturer());
        newPart.setImage(partDetails.getImage());

        final Part updatedPart = inventoryRepository.save(newPart);

        return ResponseEntity.ok(updatedPart);
    }

    @DeleteMapping("/inventory/{id}")
    @CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000", " http://192.168.1.69:3000"})
    public Map<Long, String> removeBreed(@PathVariable long id)throws ResourceNotFoundException {

        Part part = inventoryRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id not found"));
        inventoryRepository.delete(part);
        Map<Long, String> response = new HashMap<>();
        response.put(id, "Inventory updated");
        return response;
    }

    @GetMapping("inventory/{id}")
    @CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000", " http://192.168.1.69:3000"})
    public Map<Long, Part> selectedBreed(@PathVariable long id)throws ResourceNotFoundException{
        Part part = inventoryRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Id not found"));
        Map<Long, Part> response = new HashMap<>();
        response.put(id, part);
        return response;
    }

    @GetMapping("/inventory/department/{department}")
    @CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000", " http://192.168.1.69:3000"})
    public List<Part> getGroupList(@PathVariable String department)throws ResourceNotFoundException {

        List<Part> response = inventoryRepository.findByDepartment(department);
        return response;
    }

    @GetMapping("/inventory/item/{part_number}")
    @CrossOrigin(origins = {"http://localhost:8080", "http://localhost:3000", " http://192.168.1.69:3000"})
    public List<Part> getBreedList(@PathVariable String part_number)throws ResourceNotFoundException {

        List<Part> response = inventoryRepository.findByPartNumber(part_number);
        return response;
    }

}
