<?php
declare(strict_types=1);

namespace App\Application\Actions\JobDating;

use Psr\Http\Message\ResponseInterface as Response;

class UpdateJobDatingAction extends JobDatingAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $jobDatingId = (int) $this->resolveArg('id');

        $datas = $this->getFormData();

        /**
         * @var JobDating
         */
        $jobDating = $this->JobDatingRepository->findJobDatingOfId($jobDatingId);

        /**
         * @var bool
         */
        $response = $jobDating->update($datas);

        $this->logger->info("JobDating of id `${jobDatingId}` updated.");

        return $this->respondWithData(['updated'=>$response, "jobDating"=>$jobDating]);
    }
}