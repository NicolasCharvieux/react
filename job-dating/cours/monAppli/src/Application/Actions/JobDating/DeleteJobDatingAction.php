<?php
declare(strict_types=1);

namespace App\Application\Actions\JobDating;

use Psr\Http\Message\ResponseInterface as Response;

class DeleteJobDatingAction extends JobDatingAction
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
        $response = $jobDating->deleted($datas);

        $this->logger->info("JobDating of id `${jobDatingId}` deleted.");

        return $this->respondWithData(['deleted'=>$response, "jobDating"=>$jobDating]);
    }
}