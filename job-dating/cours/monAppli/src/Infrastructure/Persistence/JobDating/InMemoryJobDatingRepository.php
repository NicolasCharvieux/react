<?php
declare(strict_types=1);

namespace App\Infrastructure\Persistence\JobDating;

use App\Domain\JobDating\JobDating;
use App\Domain\JobDating\JobDatingNotFoundException;
use App\Domain\JobDating\JobDatingRepository;

class InMemoryJobDatingRepository implements JobDatingRepository
{
    /**
     * @var JobDating[]
     */
    private $jobDatings;

    /**
     * InMemoryJobDatingRepository constructor.
     *
     * @param array|null $jobDatings
     */
    public function __construct(array $jobDatings = null)
    {
        $this->jobDatings = $jobDatings ?? $this->_load();
    }

    private function _load() {
        return [
            1 => new JobDating(1, 'lyon', 'Dwmg2', '20/01/20'),
            2 => new JobDating(2, 'st geny pouilly', 'Dwmg', '19/01/20'),
            3 => new JobDating(3, 'villeurbanne', 'Dwmg2', '03/03/20'),
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function findAll(): array
    {
        // requête en BDD
        return array_values($this->jobDatings);
    }

    /**
     * {@inheritdoc}
     */
    public function findJobDatingOfId(int $id): JobDating
    {
        // requête en BDD
        // si l'id du Job Dating n'est pas trouvé
        if (!isset($this->jobDatings[$id])) {

        // propage exception
            throw new JobDatingNotFoundException();
        }
        // return jobDating
        return $this->jobDatings[$id];
    }
}