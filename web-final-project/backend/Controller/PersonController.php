<?php

namespace CRUD\Controller;

use CRUD\Helper\PersonHelper;
use CRUD\Model\Actions;
use PDO;

class PersonController
{
    public function switcher($method,$request)
    {
        switch ($method)
        {
            case Actions::CREATE:
                $this->createAction($request);
                break;
            case Actions::READ:
                $this->readAllAction($request);
                break;
            default:
                break;
        }
    }

    public function createAction($request)
    {
        $helper = new PersonHelper();
        $helper->insert($request);
    }

    public function readAllAction($request)
    {
        $helper = new PersonHelper();
        if(str_contains($_SERVER['REQUEST_URI'], '/movies')) {
            $data = $helper->fetchAll();
            echo json_encode($data);
        }
    }
}