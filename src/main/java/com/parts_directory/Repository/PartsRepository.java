package com.parts_directory.Repository;

import com.parts_directory.Model.Part;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PartsRepository extends JpaRepository<Part, Long> {

    List<Part> findByPartNumber(String partNumber);

    List<Part> findByDepartment(String department);
}
