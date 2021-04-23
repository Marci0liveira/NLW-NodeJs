import { Repository, EntityRepository, Entity } from "typeorm";
import { Connection } from "../entities/Connection";

@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection>{

}

export { ConnectionsRepository }