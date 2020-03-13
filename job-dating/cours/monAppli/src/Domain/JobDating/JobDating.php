<?php
declare(strict_types=1);

namespace App\Domain\JobDating;

use JsonSerializable;

class JobDating implements JsonSerializable
{
    /**
     * @var int|null
     */
    private $id;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $classes;

    /**
     * @var string
     */
    private $date;

    /**
     * @param int|null  $id
     * @param string    $name
     * @param string    $classes
     * @param string    $date
     */
    public function __construct(?int $id, string $name, string $classes, string $date)
    {
        $this->id = $id;
        $this->name = strtolower($name);
        $this->classes = ucfirst($classes);
        $this->date = ucfirst($date);
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getname(): string
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getclasses(): string
    {
        return $this->classes;
    }

    /**
     * @return string
     */
    public function getdate(): string
    {
        return $this->date;
    }

    /**
     * @return object $datas
     * @var bool
     */
    public function update(object $datas): bool
    {
        $response = false;
        foreach($datas as $k => $v) {
            if(!empty($this->{$k}) && $this->{$k} !== $v) {
                $this->{$k} = $v;
                $response = true;
            }
        }
        return $response;
    }

    /**
     * @return object $datas
     * @var bool
     */
    public function delete(object $datas): bool
    {
        $response = false;
        foreach($datas as $k => $v) {
            if(!empty($this->{$k}) && $this->{$k} !== $v) {
                $this->{$k} = $v;
                $response = true;
            }
        }
        return $response;
    }

    /**
     * @return array
     */
    public function jsonSerialize()
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'classes' => $this->classes,
            'date' => $this->date,
        ];
    }
}
