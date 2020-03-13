<?php
declare(strict_types=1);

namespace App\Application\Actions\User;

use Psr\Http\Message\ResponseInterface as Response;

class UpdateUserAction extends UserAction
{
    /**
     * {@inheritdoc}
     */
    protected function action(): Response
    {
        $userId = (int) $this->resolveArg('id');

        $datas = $this->getFormData();

        /**
         * @var User
         */
        $user = $this->userRepository->findUserOfId($userId);

        /**
         * @var bool
         */
        $response = $user->update($datas);

        $this->logger->info("User of id `${userId}` updated.");

        return $this->respondWithData(['updated'=>$response, "user"=>$user]);
    }
}