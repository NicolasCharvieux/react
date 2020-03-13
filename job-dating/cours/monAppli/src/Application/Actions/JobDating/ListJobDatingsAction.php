<?php
declare(strict_types=1);

namespace App\Application\Actions\JobDating;

use Psr\Http\Message\ResponseInterface as Response;

class ListJobDatingsAction extends JobDatingAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $jobDatings = $this->JobDatingRepository->findAll();

        $this->logger->info("JobDatings list was viewed.");

        return $this->respondWithData($jobDatings);
    }
}
