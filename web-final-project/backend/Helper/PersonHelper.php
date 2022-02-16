<?php

namespace CRUD\Helper;

use PDO;
use PDOException;

class PersonHelper
{

    private PDO $db;

    public function __construct()
    {
        $database = new DBConnector();
        $this->db = $database->getDB();
    }

    public function insert($req)
    {
        try {
            $sql = "INSERT INTO movies(name, description, year, img_url) VALUES(:name, :descrioption, :year, :img_url)";
            
            $statement = $this->db->prepare($sql);
            
            $statement->execute([
                    ':name' => $req['title'],
                    ':descrioption' => $req['description'],
                    ':year' => (int) $req['year'],
                    ':img_url' => (int) $req['image'],
                ]);
                http_response_code(201);
                echo "Person created successfully";
        } catch(PDOException $exception) {
            error_log("Error: ". $exception);
        }

    }

    public function fetchAll()
    {
        try 
        {
            return (($this->db->query("SELECT * FROM movies"))->fetchAll());
        } catch (PDOException $exception)
        {
            throw new PDOException($exception->getMessage());
        }
    }
}