<?php
declare(strict_types=1);

namespace App\Application\Actions\JobDating;

use Psr\Http\Message\ResponseInterface as Response;

class ViewJobDatingAction extends JobDatingAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $jobDatingId = (int) $this->resolveArg('id');
        $jobDating = $this->jobDatingRepository->findJobDatingOfId($jobDatingId);

        $this->logger->info("JobDating of id `${jobDatingId}` was viewed.");

        return $this->respondWithData($jobDating);
    }
}
