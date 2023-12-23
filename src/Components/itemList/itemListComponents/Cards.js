import React from 'react'
import "../itemListComponents/Cards.css"
import { Text } from '@chakra-ui/react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Button} from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

export default function Cards({itemName,itemPic,itemData}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div className='cards-outer' style={{width:"80%"}}>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        width={"100%"}
        marginBottom={"2rem"}
      >
        <Image
          // objectFit='cover'
          width={"100%"}
          src={itemPic}
          alt={itemName}
        />

        <Stack>
          <CardBody>
            <Heading size='md'>{itemName}</Heading>

            <Text noOfLines={2}>
              {itemData}
            </Text>
          </CardBody>

          <CardFooter width={"100%"}  display={"flex"} justifyContent={"center"}>
            <Button variant='solid' colorScheme='blue' onClick={onOpen}>
              See More
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>{itemName}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    width={"100%"}
                  >
                    <Image
                      // objectFit='cover'
                      width={"100%"}
                      src={itemPic}
                      alt={itemName}
                    />

                    <Stack>
                      <CardBody>
                        <Text>
                          {itemData}
                        </Text>
                      </CardBody>
                      </Stack>
                      </Card>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>

          </CardFooter>
        </Stack>
      </Card>
    </div>
  )
}
