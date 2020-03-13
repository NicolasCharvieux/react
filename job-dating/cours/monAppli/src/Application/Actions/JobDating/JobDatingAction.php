<?php
declare(strict_types=1);

namespace App\Application\Actions\JobDating;

use App\Application\Actions\Action;
use App\Domain\JobDating\JobDatingRepository;
use Psr\Log\LoggerInterface;

abstract class JobDatingAction extends Action
{
    /**
     * @var JobDatingRepository
     */
    protected $JobDatingRepository;

    /**
     * @param LoggerInterface $logger
     * @param JobDatingRepository  $JobDatingRepository
     */
    public function __construct(LoggerInterface $logger, JobDatingRepository $JobDatingRepository)
    {
        parent::__construct($logger);
        $this->JobDatingRepository = $JobDatingRepository;
    }
}
